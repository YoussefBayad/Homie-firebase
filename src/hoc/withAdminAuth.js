import useAdminAuth from '../hooks/useAdminAuth';

const WithAdminAuth = (props) => useAdminAuth() && props.children;

export default WithAdminAuth;
