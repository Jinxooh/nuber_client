import * as React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import PhoneLoginPresenter from "./PhoneLoginPresenter";
import { phoneVerification, phoneVerificationVariables } from "../../types/api";
import { PHONE_SIGN_IN } from "./PhoneQueries.queries";

interface IState {
  countryCode: string;
  phoneNumber: string;
}

class PhoneSignInMutation extends Mutation<phoneVerification, phoneVerificationVariables> {}

class PhoneLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    countryCode: "+82",
    phoneNumber: ""
  };

  public render() {
    const { countryCode, phoneNumber } = this.state;
    return (
      <PhoneSignInMutation
        mutation={PHONE_SIGN_IN}
        variables={{
          phoneNumber: `${countryCode}${phoneNumber}`
        }}
        onCompleted={data => {
          const { PhoneVerification } = data;
          if (PhoneVerification.ok) {
            return;
          } else {
            toast.error(PhoneVerification.error);
          }
        }}
      >
        {(mutation, { loading }) => {
          const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
            event.preventDefault();
            const isValid = /^\+[1-9]{2}[0-9]{7,11}$/.test(
              `${countryCode}${phoneNumber}`
            );
            if (isValid) {
              mutation();
            } else {
              toast.error("Please write a vlide phone number");
            }
          };
          return (
            <PhoneLoginPresenter
              countryCode={countryCode}
              phoneNumber={phoneNumber}
              onInputChange={this.onInputChange}
              onSubmit={onSubmit}
              loading={loading}
            />
          );
        }}
      </PhoneSignInMutation>
    );
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };
}

export default PhoneLoginContainer;
