import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../features/cartSlice";

const useAppSelector = useSelector
const useAppDispatch = useDispatch

export { useAppSelector, useAppDispatch }