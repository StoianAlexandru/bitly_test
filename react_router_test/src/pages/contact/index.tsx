import {Card} from "../../components/card.tsx";

export const Contact = () => (
    <Card>
        <h2 className="text-5xl font-extrabold mb-4 animate-pulse">Contact us</h2>
        <p className="text-xl text-center">Contact us at: <a
            className="text-teal-200 hover:underline font-bold"
            href="mailto:alexstoian1993@gmail.com">alexstoian1993@gmail.com</a></p>
    </Card>
);