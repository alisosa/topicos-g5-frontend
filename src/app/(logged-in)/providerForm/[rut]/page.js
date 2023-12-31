import ProviderForm from "@/partials/ProviderForm";
import axios from "axios";

const Page = async ({ params }) => {
    // const data = {
    // provider: {
    //     name: "Ana",
    //     rut: "23232332",
    //     email: "test@test.com",
    //     address: "direcc 1223",
    //     logo: 'https',
    // }
    //     questions: [
    //         {
    //             question: "Lorem ipsum dolor sit amet consectetur adipiscing, elit fames semper conubia ullamcorper posuere, leo fusce litora vestibulum urna. Dictumst rutrum varius eu nisi, tellus scelerisque imperdiet.",
    //         },
    //         {
    //             question: "Lorem ipsum dolor sit amet consectetur adipiscing, elit fames semper conubia ullamcorper posuere, leo fusce litora vestibulum urna. Dictumst rutrum varius eu nisi, tellus scelerisque imperdiet.",
    //         },
    //         {
    //             question: "Lorem ipsum dolor sit amet consectetur adipiscing, elit fames semper conubia ullamcorper posuere, leo fusce litora vestibulum urna. Dictumst rutrum varius eu nisi, tellus scelerisque imperdiet.",
    //         }
    //     ]
    // }

    const { data: { score, ...provider } } = await axios.get(`http://localhost:8080/providers/${params.rut}`)
    const { data: { questions } } = await axios.get('http://localhost:8080/form/questions');

    const data = { provider, questions }

    return (
        <ProviderForm defaultData={data} />
    );
};

export default Page;
