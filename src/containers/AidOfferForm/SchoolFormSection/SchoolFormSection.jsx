import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './SchoolFormSection.module.css';
import SearchSelect from '../../../shared/SearchSelect/SearchSelect';
import DropdownSelect from '../../../shared/DropdownSelect/DropdownSelect';
import Input from '../../../shared/Input/Input';
import { ADMISION_TYPES, COLLEGES_DATA } from '../../../data';

const SchoolFormSection = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const handleSchoolSelection = (school) =>
    setValue('aidOfferForm.school', school, { shouldValidate: true });

  return (
    <div className={styles.school_form__wrapper}>
      <div className={styles.school_form_item}>
        <SearchSelect
          label="Select the school"
          name="aidOfferForm.school"
          controller={register}
          data={COLLEGES_DATA}
          onSelectListItem={handleSchoolSelection}
          error={!!(errors.aidOfferForm && errors.aidOfferForm.school)}
          errorMsg={errors?.aidOfferForm?.school?.message ?? ''}
        />
      </div>
      <div className={styles.school_form_item}>
        <DropdownSelect
          label="Admission type"
          name="aidOfferForm.admissionType"
          controller={register}
          data={ADMISION_TYPES}
          error={!!(errors.aidOfferForm && errors.aidOfferForm.admissionType)}
          errorMsg={errors?.aidOfferForm?.admissionType?.message ?? ''}
        />
      </div>
      <div className={styles.school_form_item}>
        <Input
          label="Total cost of attendance"
          type="number"
          name="aidOfferForm.attendanceCost"
          controller={register}
          error={!!(errors.aidOfferForm && errors.aidOfferForm.attendanceCost)}
          errorMsg={errors?.aidOfferForm?.attendanceCost?.message ?? ''}
        />
      </div>
    </div>
  );
};

export default SchoolFormSection;
