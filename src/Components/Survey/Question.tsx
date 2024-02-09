interface QuestionProps {
  question: string;
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div className="flex">
      <div className="text-[20px] font-semibold">{question}</div>
      <p className="ml-[16px] mt-[5px]">복수 응답 가능</p>
    </div>
  );
};

export default Question;
