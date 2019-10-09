import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import { Form, Card, Row, Col, Button } from 'antd';
import { approvalStage, reviewPipeline, offerStatus } from 'data/offer';
import {
  InputNumber,
  Input,
  Select,
  DatePicker,
  Address,
  Upload,
} from 'components/Forms/Fields';
import validate from './validate';

class OfferNew extends Component {
  render() {
    const { handleSubmit, agents, customers } = this.props;
    const reviewed = fromJS(this.props.reviewed).toJS();

    const {
      hcPdf,
      pestReport,
      hoaAgreement,
      disclosurePacket,
      propertyInspection,
      naturalHazardReport,
    } = reviewed;

    const formatAgent = item => ({
      ...item,
      value: item.id,
      label: `${item.firstname} ${item.lastname}(${item.email})`,
    });

    return (
      <Form
        layout="vertical"
        onSubmit={handleSubmit}
        className="form-container offer-forms-components"
      >
        <Card title="Offers Information">
          <Row gutter={16}>
            <Col md={12} sm={24}>
              <Field
                name="Customer"
                label="Select Customer"
                showSearch
                component={Select}
                placeholder="Select"
                options={agents.map(formatAgent)}
              />
            </Col>
            <Col md={12} sm={24}>
              <Field
                showSearch
                name="Broker"
                label="Select Agent"
                component={Select}
                placeholder="Select"
                options={customers.map(formatAgent)}
              />
            </Col>
            <Col md={12} sm={24}>
              <Field
                showTime
                className="full"
                label="Due Date"
                name="offerDueDate"
                component={DatePicker}
              />
            </Col>
            <Col md={12} sm={24}>
              <Field
                name="offerPrice"
                placeholder="00.00"
                component={InputNumber}
                label="Offer Price ($)"
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                formatter={value =>
                  `$${value.replace(/\$\s?/, '')}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ','
                  )
                }
              />
            </Col>
            <Col sm={24}>
              <Field
                name="address"
                label="Address"
                component={Address}
                placeholder="Address"
              />
            </Col>
          </Row>
        </Card>
        <Card title="External Valuation Links">
          <Row gutter={16}>
            <Col md={16} sm={24}>
              <Field
                name="redfinLink"
                component={Input}
                label="Redfin Link"
                placeholder="Redfin Link"
              />
            </Col>
            <Col md={8} sm={24}>
              <Field
                name="redfinLinkVal"
                placeholder="00.00"
                component={InputNumber}
                label="Redfin Valuation ($)"
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                formatter={value =>
                  `$${value.replace(/\$\s?/, '')}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ','
                  )
                }
              />
            </Col>
            <Col md={16} sm={24}>
              <Field
                name="zillowLink"
                component={Input}
                label="Zillow Link"
                placeholder="Zillow Link"
              />
            </Col>
            <Col md={8} sm={24}>
              <Field
                name="zillowLinkVal"
                placeholder="00.00"
                component={InputNumber}
                label="Zillow Valuation ($)"
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                formatter={value =>
                  `$${value.replace(/\$\s?/, '')}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ','
                  )
                }
              />
            </Col>
            <Col md={16} sm={24}>
              <Field
                name="houseCanary"
                component={Input}
                label="HouseCanary Link"
                placeholder="HouseCanary Link"
              />
            </Col>
            <Col md={8} sm={24}>
              <Field
                name="houseCanaryVal"
                placeholder="00.00"
                component={InputNumber}
                label="HouseCanary Valuation ($)"
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                formatter={value =>
                  `$${value.replace(/\$\s?/, '')}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ','
                  )
                }
              />
            </Col>
          </Row>
        </Card>
        <Card title="Documentation">
          <table className="table table-outline table-sm">
            <thead>
              <tr>
                <th>Documentation</th>
                <th>Link to file</th>
                <th>Update date</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Property Inspection</th>
                <td>
                  {((propertyInspection || {}).link && (
                    <a
                      href={(propertyInspection || {}).link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Click Here
                    </a>
                  )) ||
                    'N/A'}
                </td>
                <td>
                  {((propertyInspection || {}).date &&
                    moment(
                      (propertyInspection || {}).date ||
                        '' ||
                        new Date().toISOString()
                    ).format('llll')) ||
                    'N/A'}
                </td>
                <td>
                  <Field
                    component={Upload}
                    id="propertyInspection"
                    name="propertyInspection"
                    placeholder="Select"
                  />
                </td>
              </tr>
              <tr>
                <th>Seller Disclosure</th>
                <td>
                  {(((disclosurePacket || {}).link ||
                    (reviewed.disclosurePacket || {}).link) && (
                    <a
                      href={
                        (disclosurePacket || {}).link ||
                        (reviewed.disclosurePacket || {}).link
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Click Here
                    </a>
                  )) ||
                    'N/A'}
                </td>
                <td>
                  {(((disclosurePacket || {}).date ||
                    (reviewed.disclosurePacket || {}).date) &&
                    moment(
                      (disclosurePacket || {}).date ||
                        (reviewed.disclosurePacket || {}).date ||
                        '' ||
                        new Date().toISOString()
                    ).format('llll')) ||
                    'N/A'}
                </td>
                <td>
                  <Field
                    component={Upload}
                    id="disclosurePacket"
                    name="disclosurePacket"
                    placeholder="Select"
                  />
                </td>
              </tr>
              <tr>
                <th>Pest Report</th>
                <td>
                  {(((pestReport || {}).link ||
                    (reviewed.pestReport || {}).link) && (
                    <a
                      href={
                        (pestReport || {}).link ||
                        (reviewed.pestReport || {}).link
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Click Here
                    </a>
                  )) ||
                    'N/A'}
                </td>
                <td>
                  {(((pestReport || {}).date ||
                    (reviewed.pestReport || {}).date) &&
                    moment(
                      (pestReport || {}).date ||
                        (reviewed.pestReport || {}).date ||
                        '' ||
                        new Date().toISOString()
                    ).format('llll')) ||
                    'N/A'}
                </td>
                <td>
                  <Field
                    component={Upload}
                    id="pestReport"
                    name="pestReport"
                    placeholder="Select"
                  />
                </td>
              </tr>
              <tr>
                <th>Natural Hazard Report</th>
                <td>
                  {(((naturalHazardReport || {}).link ||
                    (reviewed.naturalHazardReport || {}).link) && (
                    <a
                      href={
                        (naturalHazardReport || {}).link ||
                        (reviewed.naturalHazardReport || {}).link
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Click Here
                    </a>
                  )) ||
                    'N/A'}
                </td>
                <td>
                  {(((naturalHazardReport || {}).date ||
                    (reviewed.naturalHazardReport || {}).date) &&
                    moment(
                      (naturalHazardReport || {}).date ||
                        (reviewed.naturalHazardReport || {}).date ||
                        '' ||
                        new Date().toISOString()
                    ).format('llll')) ||
                    'N/A'}
                </td>
                <td>
                  <Field
                    component={Upload}
                    id="naturalHazardReport"
                    name="naturalHazardReport"
                    placeholder="Select"
                  />
                </td>
              </tr>
              <tr>
                <th>HOA Agreements</th>
                <td>
                  {(((hoaAgreement || {}).link ||
                    (reviewed.hoaAgreement || {}).link) && (
                    <a
                      href={
                        (hoaAgreement || {}).link ||
                        (reviewed.hoaAgreement || {}).link
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Click Here
                    </a>
                  )) ||
                    'N/A'}
                </td>
                <td>
                  {(((hoaAgreement || {}).date ||
                    (reviewed.hoaAgreement || {}).date) &&
                    moment(
                      (hoaAgreement || {}).date ||
                        (reviewed.hoaAgreement || {}).date ||
                        '' ||
                        new Date().toISOString()
                    ).format('llll')) ||
                    'N/A'}
                </td>
                <td>
                  <Field
                    component={Upload}
                    id="hoaAgreement"
                    name="hoaAgreement"
                    placeholder="Select"
                  />
                </td>
              </tr>
              <tr>
                <th>Other</th>
                <td>
                  {(((hcPdf || {}).link || (reviewed.hcPdf || {}).link) && (
                    <a
                      href={(hcPdf || {}).link || (reviewed.hcPdf || {}).link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Click Here
                    </a>
                  )) ||
                    'N/A'}
                </td>
                <td>
                  {(((hcPdf || {}).date || (reviewed.hcPdf || {}).date) &&
                    moment(
                      (hcPdf || {}).date ||
                        (reviewed.hcPdf || {}).date ||
                        '' ||
                        new Date().toISOString()
                    ).format('llll')) ||
                    'N/A'}
                </td>
                <td>
                  <Field
                    component={Upload}
                    id="hcPdf"
                    name="hcPdf"
                    placeholder="Select"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
        <Card title="Offers Stages">
          <Row gutter={16}>
            <Col md={8} sm={24}>
              <Field
                showSearch
                component={Select}
                options={reviewPipeline}
                id="review_pipeline"
                name="review_pipeline"
                label="Review Pipeline"
                placeholder="Select"
              />
            </Col>
            <Col md={8} sm={24}>
              <Field
                showSearch
                component={Select}
                id="approval_stage"
                options={approvalStage}
                name="approval_stage"
                label="Approval Status"
                placeholder="Select"
              />
            </Col>
            <Col md={8} sm={24}>
              <Field
                showSearch
                component={Select}
                options={offerStatus}
                id="offer_stage"
                name="offer_stage"
                label="Offer Stage"
                placeholder="Select"
              />
            </Col>
          </Row>
        </Card>
        <div className="pull-right action-group">
          <Button size="large" type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

OfferNew.propTypes = {
  pristine: PropTypes.bool,
  reviewed: PropTypes.object,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  agents: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
};

const selector = formValueSelector('offer-form');

const mapStateToProps = state => ({
  agents: state.getIn(['agent', 'list']).toJS(),
  customers: state.getIn(['customer', 'list']).toJS(),
  reviewed: selector(
    state,
    'propertyInspection',
    'disclosurePacket',
    'pestReport',
    'naturalHazardReport',
    'hoaAgreement',
    'hcPdf',
    'appraisal'
  ),
});

export default connect(mapStateToProps)(
  reduxForm({
    enableReinitialize: true,
    form: 'offer-form',
    validate,
  })(OfferNew)
);
