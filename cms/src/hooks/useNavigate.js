import { useHistory } from "react-router-dom";

const useNavigate = () => {
  const history = useHistory();

  const nagivateTo = (path) => history.push(path);
  return nagivateTo;
};

export default useNavigate;
