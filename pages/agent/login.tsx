import AgentLogin from '../../src/ui/login/AgentLogin';
import AuthStore from '../../src/ui/login/store'

const AgentLoginPage = () => <AgentLogin store={AuthStore}/>;

export default AgentLoginPage;