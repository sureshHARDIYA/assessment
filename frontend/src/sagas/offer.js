import * as OFFER from 'actions/offer';
import { notification } from 'antd';
import { call, put, getContext } from 'redux-saga/effects';
import getOffers from '../graphiql/offer-search.graphql';
import createOffer from '../graphiql/offer-create.graphql';

export function* onSearchRequest(action) {
  try {
    const client = yield getContext('client');
    const { data } = yield call(client.query, {
      query: getOffers,
      ...(action.options || {}),
    });
    yield put(OFFER.onSearchSuccess({ payload: data.allOffers }));
    action.cb && (yield call(action.cb, data.allOffers));
  } catch (error) {
    console.log(error);
    yield put(OFFER.onSearchFailure({ error }));
    action.cb && (yield call(action.cb, null, error));
  }
}

export function* onCreateRequest(action) {
  try {
    const { offer } = action;
    if (!offer.offerId) {
      offer.offerId = btoa(`OFFER-${Date.now()}`);
    }

    const client = yield getContext('client');
    const {
      data: { createOffer: data },
    } = yield call(client.mutate, {
      mutation: createOffer,
      variables: { offer },
      ...(action.options || {}),
    });

    notification.success({
      message: 'Creating Offer',
      description: `The Offer ${data.offer.offerId} is created successfully!`,
    });

    yield put(OFFER.onCreateSuccess({ payload: data.offer }));
    action.cb && (yield call(action.cb, null, data.offer));
  } catch (error) {
    console.log('error:', error);

    notification.error({
      description: error.message,
      message: 'Error creating the offer',
    });

    yield put(OFFER.onCreateFailure({ error }));
    action.cb && (yield call(action.cb, error, null));
  }
}
