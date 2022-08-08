import { MainContainer } from "./Home.styles";
import { Container, MainHeading, Heading } from "../../components";
import { Lorem } from "../../utils/Lorem";
import { Link } from "react-router-dom";

function Home() {
	return (
		<MainContainer>
			<MainHeading>This is a test</MainHeading>
			<Heading>I can't wait to add the <Link to="/chapter/1/lesson/1">chapters</Link> here!</Heading>
			<p style={{ color: "darkcyan", marginTop: "30px", fontSize: '30px' }}>
				{`${ Lorem }`}
			</p>
		</MainContainer>
	);
}

export default Home;
