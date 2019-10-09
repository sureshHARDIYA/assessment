import homeNotes from './HomebuyerNotes';

export const getColor = status => {
  switch (status) {
    case 'not_ready_to_review':
      return 'secondary';
    case 'ready_to_review':
      return 'danger';
    case 'pending_approval':
      return 'warning';
    case 'contingent_approval':
      return 'info';
    case 'noncontingent_approval':
      return 'info';
    case 'new_documents':
      return 'danger';
    case 'submitted_contingent':
      return 'primary';
    case 'submitted_noncontingent':
      return 'primary';
    case 'not_submitted':
      return 'secondary';
    case 'accepted_contingent':
      return 'success';
    case 'accepted_noncontingent':
      return 'success';
    case 'contingency_ready_to_review':
      return 'danger';
    case 'contingency_under_review':
      return 'warning';
    case 'contingency_approved':
      return 'info';
    case 'home_closed':
      return 'dark';
    case 'terminated':
      return 'secondary';
    case 'pending_review':
      return 'warning';
    case 'conditional_support':
      return 'primary';
    case 'property_approved':
      return 'success';
    case 'deal_approved':
      return 'secondary';
    case 'escalate':
      return 'danger';
    case 'pre_offer':
      return 'warning';
    case 'submitted':
      return 'primary';
    case 'countered':
      return 'primary';
    case 'accepted':
      return 'success';
    case 'closed':
      return 'success';
    case 'lost':
      return 'secondary';

    default:
  }

  return 'secondary';
};

export const getCoBuyerUsername = id => {
  switch (parseInt(id, 10)) {
    case 13802901:
      return 'Jonathan Asmis';
    case 30151919:
      return 'Emily Eshman';

    case 13924103:
      return 'Jesse Vaughan';

    case 15736471:
      return 'Jess Zhao';

    case 32899416:
      return "D'Andre Bell";

    case 32899413:
      return 'Alie Kelley';

    case 34089831:
      return 'Annie Vasishta';

    case 31068852:
      return 'Jay Plant';
    default:
  }

  return id;
};

export const getAccountRepOptions = [
  {
    value: '13802901',
    label: 'Jonathan Asmis',
  },
  {
    value: '30151919',
    label: 'Emily Eshman',
  },
  {
    value: '13924103',
    label: 'Jesse Vaughan',
  },
  {
    value: '15736471',
    label: 'Jess Zhao',
  },
  {
    value: '32899416',
    label: "D'Andre Bell",
  },
  {
    value: '32899413',
    label: 'Alie Kelley',
  },
  {
    value: '34089831',
    label: 'Annie Vasishta',
  },
  {
    value: '31068852',
    label: 'Jay Plant',
  },
];

export const propertyData = [
  { value: 'no', label: 'No' },
  { value: 'yes', label: 'Yes' },
  { value: 'TBD', label: 'TBD' },
];

export const reviewPipeline = [
  { value: 'ready_to_review', label: 'Ready to Review' },
  { value: 'under_review', label: 'Under Review' },
  { value: 'reviewed', label: 'Reviewed' },
];

export const approvalStage = [
  { value: 'conditional_support', label: 'Conditional Support' },
  { value: 'escalate', label: 'Escalate' },
  { value: 'pending_review', label: 'Pending' },
  { value: 'property_approved', label: 'Property Approved' },
];

export const offerStatus = [
  { value: 'pre_offer', label: 'Pre-Offer' },
  { value: 'submitted', label: 'Submitted' },
  { value: 'not_submitted', label: 'Not submitted' },
  { value: 'countered', label: 'Countered' },
  { value: 'accepted', label: 'Accepted' },
  { value: 'lost', label: 'Lost' },
  { value: 'terminated', label: 'Terminated' },
  { value: 'closed', label: 'Closed' },
];

export const offerStatusObj = offerStatus.reduce(
  (obj, item) => ({ ...obj, [item.value]: item.label }),
  {}
);

export const approvalStageObj = approvalStage.reduce(
  (obj, item) => ({ ...obj, [item.value]: item.label }),
  {}
);

export const structuralRepairs = {
  tbd: 'TBD',
  not_inspected: 'Not inspected',
  no_major: 'No major issues',
  serviceable: 'Currently serviceable',
  serviceable_5k: 'Currently serviceable w/ >$5K in repairs',
  not_serviceable: 'Currently not serviceable',
};

export const isObject = value => {
  try {
    Object.setPrototypeOf({}, value);
    return value !== null;
  } catch (err) {
    return false;
  }
};

export const getAgentsOptions = (brokers, isBroker) => {
  const options = [];
  if (isBroker) {
    //eslint-disable-next-line
    brokers.length &&
      brokers.map(item =>
        options.push({
          value: item.id,
          label: `${item.firstname || ''} ${(item && item.lastname) ||
            ''} (${item.email || ''})`,
          name: `${item.firstname || ''} ${(item && item.lastname) || ''}`,
          email: item.email || '',
        })
      );
  } else {
    //eslint-disable-next-line
    brokers.length &&
      brokers.map(item =>
        options.push({
          value: item.id,
          label: `${item.firstname} ${item.lastname} (${item.email})`,
          name: `${item.firstname || ''} ${(item && item.lastname) || ''}`,
          email: item.email,
        })
      );
  }
  return options;
};

export const propertyDataByField = {
  type_of_home: {
    townhouse: 'Townhouse',
    condo: 'Condo',
    single_home: 'Single family home',
    tbd: 'TBD',
    other: 'Other (please explain)',
  },
  structural_major_repair: {
    foundation: 'Foundation',
    foof: 'Roof',
    siding_walls: 'Siding / Walls',
    electrical: 'Electrical',
    other: 'Other (please explain)',
  },
  wood_destroying: {
    termites: 'Termites',
    dry_rot: 'Dry rot',
    water_damage: 'Water damage',
    mold_fungus: 'Mold/fungus',
    tbd: 'TBD',
    none: 'None',
    other: 'Other (please explain)',
  },
  property_in_overall: {
    poor: 'Poor',
    fair: 'Fair',
    good: 'Good',
    excellent: 'Excellent',
  },
  property_lie: {
    special_flood: 'Special Flood Hazard Area',
    area_of_potential_flooding: 'Area of Potential Flooding',
    very_high: 'Very High Fire Hazard Severity Zone',
    earthquake: 'Earthquake Fault Zone',
    wildlife_area:
      'Wildlife Area that may contain Substantial Forest Fire Risk and Hazards',
    seismic_hazard: 'Seismic Hazard: Landslide',
    seismic_hazard_liq: 'Seismic Hazard: Liquefaction Zone',
    other: 'Other Natural Hazard Zone',
  },
  part_of_a_hoa: {
    yes: 'Yes',
    no: 'No',
    tbd: 'TBD',
  },
  sold_last_nine_months: {
    yes: 'Yes',
    no: 'No',
    tbd: 'TBD',
  },
  approved_zip_code: {
    yes: 'Yes',
    no: 'No',
    tbd: 'TBD',
  },
  percentage_of_hoa: {
    poor: '1-30% (Poor)',
    fair: '31-50% (Fair)',
    good: '51-70% (Good)',
    excellent: '71-100% (Excellent)',
    tbd: 'TBD',
  },
  outstanding_indicated: {
    yes: 'Yes',
    no: 'No',
    tbd: 'TBD',
    unknown: 'Unknown',
  },
};

export const setValueNotes = (property, value_notes) => {
  const notes = [];

  if (property.part_of_a_hoa === 'yes') {
    if (['tbd'].includes(property.percentage_of_hoa))
      notes.push(homeNotes['Unknown Status of HOA']);
    if (['poor', 'fair'].includes(property.percentage_of_hoa))
      notes.push(homeNotes['HOA Funding Issues']);
  }

  if (property.part_of_a_hoa === 'no') {
    if (['not_inspected'].includes(property.roof))
      notes.push(homeNotes['Unknown Roof Quality']);
    if (['serviceable_5k', 'not_serviceable'].includes(property.roof))
      notes.push(homeNotes['Likely Roof Repair/Replacement']);
    if (
      ['serviceable_5k', 'not_serviceable'].includes(
        property.structural_component
      )
    )
      notes.push(homeNotes['Potential Foundation Issues']);
    const propertyLie =
      typeof property.property_lie.toJS === 'function'
        ? property.property_lie.toJS()
        : property.property_lie;

    if (propertyLie.length) {
      if (
        propertyLie.includes('special_flood') ||
        propertyLie.includes('area_of_potential_flooding')
      )
        notes.push(homeNotes['Flood Zone']);
      if (propertyLie.includes('very_high')) notes.push(homeNotes['Fire Zone']);
      if (
        propertyLie.includes('earthquake') ||
        propertyLie.includes('seismic_hazard') ||
        propertyLie.includes('seismic_hazard_liq')
      )
        notes.push(homeNotes['Seismic Zone']);
    }
  }

  if (['yes', 'no'].includes(property.part_of_a_hoa)) {
    if (property.approved_zip_code === 'no')
      notes.push(homeNotes['Long Distance from City Core']);
    if (property.sold_last_nine_months === 'yes')
      notes.push(homeNotes['Flipped Property']);
  }

  return notes.length ? notes.join('\n\n') : value_notes;
};
