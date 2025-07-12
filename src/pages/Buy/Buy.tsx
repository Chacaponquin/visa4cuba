import { useContext } from "react";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import Layout from "../../modules/shared/components/Layout/Layout";
import BuyResult from "./components/BuyResult/BuyResult";
import PassegersForm from "./components/PassegersForm/PassegersForm";
import Steps from "./components/Steps/Steps";
import UserForm from "./components/UserForm/UserForm";
import { BUY_STEP } from "./domain/buy-steps";
import useBuy from "./hooks/useBuy";
import { LanguageContext } from "../../modules/app/modules/language/context/language-context";
import BaseTranslationPage from "../../modules/app/components/BaseTranslationPage/BaseTranslationPage";

export default function Buy({
  builder,
  language: ilanguage,
}: TranslationPageProps) {
  const { language } = useContext(LanguageContext);

  const {
    steps,
    selected,
    email,
    setEmail,
    lastname,
    setLastname,
    name,
    setName,
    phone,
    setPhone,
    handlePass,
    handleSelectSection,
    passegers,
    handleChangeLastname,
    handleChangeName,
    handleChangeArriveDate,
    handleChangeBirthdate,
    handleChangeLeaveDate,
    handleChangePassport,
    birthdate,
    setBirthdate,
    country,
    setCountry,
    handleChangeCountry,
  } = useBuy();

  return (
    <BaseTranslationPage builder={builder} language={ilanguage}>
      <Layout builder={builder}>
        <main className="w-full flex flex-col items-center px-5 pb-16">
          <div className="w-full flex lg:flex-row flex-col max-w-layout lg:items-start items-center gap-x-10 gap-y-7 justify-between">
            <Steps
              steps={steps}
              onChangeStep={handleSelectSection}
              selected={selected}
            />

            {selected.type === BUY_STEP.USER && (
              <UserForm
                country={{ onChange: setCountry, value: country }}
                birthdate={{ value: birthdate, onChange: setBirthdate }}
                description={selected.description[language]}
                title={selected.title[language]}
                onSubmit={() => handlePass(BUY_STEP.USER)}
                email={{ value: email, onChange: setEmail }}
                name={{ value: name, onChange: setName }}
                phone={{ value: phone, onChange: setPhone }}
                lastname={{ value: lastname, onChange: setLastname }}
              />
            )}

            {selected.type === BUY_STEP.DETAILS && (
              <PassegersForm
                onChangeCountry={handleChangeCountry}
                onChangeName={handleChangeName}
                description={selected.description[language]}
                passegers={passegers}
                onSubmit={() => handlePass(BUY_STEP.DETAILS)}
                onChangeArriveDate={handleChangeArriveDate}
                onChangeBirhtdate={handleChangeBirthdate}
                onChangeLeaveDate={handleChangeLeaveDate}
                onChangePassport={handleChangePassport}
                onChangeLastname={handleChangeLastname}
                title={selected.title[language]}
              />
            )}

            {selected.type === BUY_STEP.PAYMENT && (
              <BuyResult
                description={selected.description[language]}
                title={selected.title[language]}
              />
            )}
          </div>
        </main>
      </Layout>
    </BaseTranslationPage>
  );
}
