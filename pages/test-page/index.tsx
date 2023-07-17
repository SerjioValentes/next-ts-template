import { setTestData } from "@/store/user/slice";
import { useDispatch, useSelector } from "react-redux";

const TestPage = () => {
	const counter = useSelector((state: any) => state.user.data);
	const dispatch = useDispatch();

	const checkSome = () => {
		console.log(counter);
	};

	const DispatchMe = () => {
		dispatch(setTestData("asd"));

		console.log(counter);
	};

	return (
		<>
			{counter}
			<button onClick={checkSome}>showMeStoreData</button>
			<button onClick={DispatchMe}>DispatchMe</button>
		</>
	);
};
export default TestPage;
