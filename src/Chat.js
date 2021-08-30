import { useParams } from "react-router-dom";
import Chart from './Chart';
import Form from './Form';

export const Chat = ({messageList, setMessageList})=>{

const {chatId} = useParams();
console.log({chatId});

    return <div>

    <Chart messageList={messageList} />
    <Form messageList={messageList} setMessageList={setMessageList}></Form>

    </div>;
};