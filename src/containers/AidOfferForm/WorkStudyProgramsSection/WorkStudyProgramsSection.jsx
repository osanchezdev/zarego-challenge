import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './WorkStudyProgramsSection.module.css';
import Divider from '../../../shared/Divider/Divider';
import Input from '../../../shared/Input/Input';

const WorkStudyProgramsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className={styles.work_study_programs_section__wrapper}>
        <Divider text="Work Study Programs" />
        <p className={styles.work_study_programs_section_description}>
          Add the details of the money your student can earn: work study amount
        </p>
        <div className={styles.work_study_programs_section__form_wrapper}>
          <div className={styles.work_study_programs_section_form_item}>
            <Input
              label="Work Study"
              prefixText="$"
              name="aidOfferForm.workStudy"
              controller={register}
              error={
                !!(
                  errors.aidOfferForm && errors.aidOfferForm.privateScholarship
                )
              }
              errorMsg={errors?.aidOfferForm?.privateScholarship?.message ?? ''}
            />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default WorkStudyProgramsSection;
