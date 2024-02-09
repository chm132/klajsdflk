interface InputProps {
  gender: string;
}

const Input = ({ gender }: InputProps) => {
  return (
    <div className="hover:bg-primary01 flex justify-between px-3 py-2 rounded-xl border text-[#666666] hover:text-white">
      <p>{gender}</p>
      <img src="/assets/Survey/checkboximg.svg"></img>
    </div>
  );
};

export default Input;
