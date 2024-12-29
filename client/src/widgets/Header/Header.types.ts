export interface HeaderProps {
  isAuthenticated: Boolean;
  onLogin: () => void;
  onRegister: () => void;
  userProfile: {
    name: string;
  };
}
