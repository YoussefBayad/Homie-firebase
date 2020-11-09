import useAuth from '../hooks/useAuth';

const WithAuth = ({ children }) => useAuth() && children;

export default WithAuth;
