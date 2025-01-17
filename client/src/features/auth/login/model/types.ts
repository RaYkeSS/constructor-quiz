import { Dispatch, SetStateAction, MouseEvent } from "react";
import {
  ApolloCache,
  DefaultContext,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";

//ui
export interface LoginProps {}

export interface LoginModalProps extends LoginProps {
  open: Boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// model

export interface IhandleLogin {
  (
    e: MouseEvent,
    login: (
      options?:
        | MutationFunctionOptions<
            any,
            OperationVariables,
            DefaultContext,
            ApolloCache<any>
          >
        | undefined,
    ) => Promise<any>,
  ): Promise<void>;
}
