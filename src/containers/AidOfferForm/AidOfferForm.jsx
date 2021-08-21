import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import aidOfferFormSchema from '../../validations/aidOfferFormSchema';
import Divider from '../../shared/Divider/Divider';
import styles from './AidOfferForm.module.css';
import SchoolFormSection from './SchoolFormSection/SchoolFormSection';
import GrantsAndScholarshipsSection from './GrantsAndScholarshipsSection/GrantsAndScholarshipsSection';
import WorkStudyProgramsSection from './WorkStudyProgramsSection/WorkStudyProgramsSection';

const AidOfferForm = () => {
  const methods = useForm({
    resolver: yupResolver(aidOfferFormSchema),
    defaultValues: {
      aidOfferForm: {
        attendanceCost: 0,
        grantsFinancialNeeds: 0,
        grantsNotFinancialNeeds: 0,
        pellStateGrants: 0,
        privateScholarship: 0,
        workStudy: 0,
      },
    },
  });
  const onSubmit = (data) => {
    methods.reset();
    window.alert(JSON.stringify(data));
  };
  const getTotal = () => {
    const total =
      Number(methods.getValues('aidOfferForm.attendanceCost')) +
      Number(methods.getValues('aidOfferForm.grantsFinancialNeeds')) +
      Number(methods.getValues('aidOfferForm.grantsNotFinancialNeeds')) +
      Number(methods.getValues('aidOfferForm.pellStateGrants')) +
      Number(methods.getValues('aidOfferForm.privateScholarship')) +
      Number(methods.getValues('aidOfferForm.workStudy'));

    return !Number.isNaN(total) ? total : 0;
  };
  const watchInputs = methods.watch([
    'aidOfferForm.attendanceCost',
    'aidOfferForm.grantsFinancialNeeds',
    'aidOfferForm.grantsNotFinancialNeeds',
    'aidOfferForm.pellStateGrants',
    'aidOfferForm.privateScholarship',
    'aidOfferForm.workStudy',
  ]);

  React.useEffect(() => {
    getTotal();
  }, [watchInputs]);

  return (
    <FormProvider {...methods}>
      <div className={styles.form__wrapper}>
        <form
          autoComplete="off"
          autoCorrect="off"
          className={styles.form}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <p className={styles.form_title}>Your Financial Aid Offer</p>
          <Divider />
          <div className={styles.form_sections__wrapper}>
            <SchoolFormSection />
            <GrantsAndScholarshipsSection />
            <WorkStudyProgramsSection />
          </div>
          <p className={styles.form_total}>
            Total Cost to You
            <b>{`$ ${getTotal().toLocaleString('en-US')}`}</b>
          </p>
          <Divider />
          <div className={styles.form_actions__wrapper}>
            {/* TODO: Create global shared component */}
            <button type="button" onClick={() => methods.reset()}>
              Cancel
            </button>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default AidOfferForm;
