import { MainContainer } from "./Home.styles";
import { Container, MainHeading, Heading } from "../../components/Global";
import Navbar from "../../components/Navbar/Navbar";
import { Lorem } from "../../utils/Lorem";

function Home() {
	return (
        <>
        <Navbar/>
		<MainContainer>
			<MainHeading>This is a test</MainHeading>
			<Heading>I can't wait to add the chapters here!</Heading>
			<p style={{ color: "darkcyan", marginTop: "30px", fontSize: '30px' }}>
				{`${ Lorem }`}
			</p>
		</MainContainer>
        </>
	);
}

export default Home;
