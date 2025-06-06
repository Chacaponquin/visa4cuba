import Layout from "../../modules/shared/components/Layout/Layout";
import Steps from "./components/Steps/Steps";
import UserForm from "./components/UserForm/UserForm";
import { BUY_STEP } from "./domain/buy-steps";
import useBuy from "./hooks/useBuy";

export default function Buy() {
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
  } = useBuy();

  return (
    <Layout>
      <main className="w-full flex flex-col items-center px-5 pb-16">
        <div className="w-full flex max-w-layout items-start gap-x-10 justify-between">
          <Steps
            steps={steps}
            onChangeStep={handleSelectSection}
            selected={selected}
          />

          {selected.type === BUY_STEP.USER && (
            <UserForm
              description={selected.description}
              title={selected.title}
              onSubmit={() => handlePass(BUY_STEP.USER)}
              email={{ value: email, onChange: setEmail }}
              name={{ value: name, onChange: setName }}
              phone={{ value: phone, onChange: setPhone }}
              lastname={{ value: lastname, onChange: setLastname }}
            />
          )}
        </div>
      </main>
    </Layout>
  );
}
