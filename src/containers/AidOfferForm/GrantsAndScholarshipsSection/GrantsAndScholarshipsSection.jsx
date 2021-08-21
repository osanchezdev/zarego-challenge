import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './GrantsAndScholarshipsSection.module.css';
import Divider from '../../../shared/Divider/Divider';
import Input from '../../../shared/Input/Input';
import Checkbox from '../../../shared/Checkbox/Checkbox';

const GrantsAndScholarshipsSection = () => {
  const {
    watch,
    setValue,
    getValues,
    register,
    formState: { errors },
  } = useFormContext();

  const getGrantsScholarshipsTotal = () => {
    const total =
      Number(getValues('aidOfferForm.grantsFinancialNeeds')) +
      Number(getValues('aidOfferForm.grantsNotFinancialNeeds')) +
      Number(getValues('aidOfferForm.pellStateGrants')) +
      Number(getValues('aidOfferForm.privateScholarship'));

    return !Number.isNaN(total) ? total : 0;
  };
  const calculateRenewableAmount = (checked, currentAmount) =>
    checked ? Number(currentAmount) * 4 : Number(currentAmount) / 4;

  const watchInputs = watch([
    'aidOfferForm.grantsFinancialNeeds',
    'aidOfferForm.grantsNotFinancialNeeds',
    'aidOfferForm.pellStateGrants',
    'aidOfferForm.privateScholarship',
  ]);
  const renewGrantsFinancialNeeds = watch(
    'aidOfferForm.renewGrantsFinancialNeeds'
  );
  const renewNotGrantsFinancialNeeds = watch(
    'aidOfferForm.renewNotGrantsFinancialNeeds'
  );
  const renewPrivateScholarship = watch('aidOfferForm.renewPrivateScholarship');

  React.useEffect(() => {
    setValue(
      'aidOfferForm.grantsFinancialNeeds',
      calculateRenewableAmount(
        renewGrantsFinancialNeeds,
        getValues('aidOfferForm.grantsFinancialNeeds')
      )
    );
  }, [renewGrantsFinancialNeeds]);
  React.useEffect(() => {
    setValue(
      'aidOfferForm.grantsNotFinancialNeeds',
      calculateRenewableAmount(
        renewNotGrantsFinancialNeeds,
        getValues('aidOfferForm.grantsNotFinancialNeeds')
      )
    );
  }, [renewNotGrantsFinancialNeeds]);
  React.useEffect(() => {
    setValue(
      'aidOfferForm.privateScholarship',
      calculateRenewableAmount(
        renewPrivateScholarship,
        getValues('aidOfferForm.privateScholarship')
      )
    );
  }, [renewPrivateScholarship]);

  React.useEffect(() => {
    getGrantsScholarshipsTotal();
  }, [watchInputs]);

  return (
    <>
      <div className={styles.grants_n_scholarships_section__wrapper}>
        <Divider text="Grants & Scholarships" />
        <p className={styles.grants_n_scholarships_section_description}>
          Add the details of the money you don&apost have to pay back: school
          grants and scholarships, federal grants and private grants.
        </p>
        <div className={styles.grants_n_scholarships_section__form_wrapper}>
          <div className={styles.grants_n_scholarships_section__form_item}>
            <p
              className={styles.grants_n_scholarships_section__form_item_title}
            >
              Institution
            </p>
            <Input
              label="Total grants and scholarships based on financial needs"
              name="aidOfferForm.grantsFinancialNeeds"
              type="number"
              prefixText="$"
              controller={register}
              error={
                !!(
                  errors.aidOfferForm &&
                  errors.aidOfferForm.grantsFinancialNeeds
                )
              }
              errorMsg={
                errors?.aidOfferForm?.grantsFinancialNeeds?.message ?? ''
              }
            />
            <Checkbox
              label={"Yes, it's renewable."}
              name="aidOfferForm.renewGrantsFinancialNeeds"
              controller={register}
            />
          </div>
          <div className={styles.grants_n_scholarships_section__form_item}>
            <p
              className={styles.grants_n_scholarships_section__form_item_title}
              style={{ opacity: '0' }}
            >
              .
            </p>
            <Input
              label="Total grants and scholarships NOT based on financial needs"
              name="aidOfferForm.grantsNotFinancialNeeds"
              type="number"
              prefixText="$"
              controller={register}
              error={
                !!(
                  errors.aidOfferForm &&
                  errors.aidOfferForm.grantsNotFinancialNeeds
                )
              }
              errorMsg={
                errors?.aidOfferForm?.grantsNotFinancialNeeds?.message ?? ''
              }
            />
            <Checkbox
              label={"Yes, it's renewable."}
              name="aidOfferForm.renewNotGrantsFinancialNeeds"
              controller={register}
            />
          </div>
          <div className={styles.grants_n_scholarships_section__form_item}>
            <p
              className={styles.grants_n_scholarships_section__form_item_title}
            >
              Government
            </p>
            <Input
              label="Total Pell and State Grants"
              name="aidOfferForm.pellStateGrants"
              type="number"
              prefixText="$"
              controller={register}
              error={
                !!(errors.aidOfferForm && errors.aidOfferForm.pellStateGrants)
              }
              errorMsg={errors?.aidOfferForm?.pellStateGrants?.message ?? ''}
            />
          </div>
          <div className={styles.grants_n_scholarships_section__form_item}>
            <p
              className={styles.grants_n_scholarships_section__form_item_title}
            >
              Private
            </p>
            <Input
              label="Total Private Scholarship"
              name="aidOfferForm.privateScholarship"
              type="number"
              prefixText="$"
              controller={register}
              error={
                !!(
                  errors.aidOfferForm && errors.aidOfferForm.privateScholarship
                )
              }
              errorMsg={errors?.aidOfferForm?.privateScholarship?.message ?? ''}
            />
            <Checkbox
              label="Yes, this will reduce my aid."
              name="aidOfferForm.renewPrivateScholarship"
              controller={register}
            />
          </div>
        </div>
        <div className={styles.grants_n_scholarships_section__total_wrapper}>
          <p>
            Total Grants & Scholarships
            <b>
              <span
                className={styles.grants_n_scholarships_section__total_amount}
              >
                {`$  ${getGrantsScholarshipsTotal().toLocaleString('en-US')}`}
              </span>
            </b>
          </p>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default GrantsAndScholarshipsSection;
