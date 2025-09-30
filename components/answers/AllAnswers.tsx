import { EMPTY_ANSWERS } from "@/constants/states";
import DataRenderer from "../DataRenderer";
import AnswerCard from "../cards/AnswerCard";
import Pagination from "../Pagination";
import CommonFilter from "../filters/CommonFilter";
import { AnswerFilters } from "@/constants/filters";

interface Props extends ActionResponse<Answer[]> {
  page: number;
  isNext: boolean;
  totalAnswers: number;
}

const AllAnswers = ({
  page,
  isNext,
  data,
  success,
  error,
  totalAnswers,
}: Props) => {
  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient line-clamp-1">
          {totalAnswers} {totalAnswers === 1 ? "Answer" : "Answers"}
        </h3>
        <div>
          <CommonFilter
            filters={AnswerFilters}
            otherClasses="sm:min-w-32 "
            containerClasses="max-xs:w-full z-50"
          />
        </div>
      </div>

      <DataRenderer
        data={data}
        error={error}
        success={success}
        empty={EMPTY_ANSWERS}
        render={(answers) =>
          answers.map((answer) => <AnswerCard key={answer._id} {...answer} />)
        }
      />
    </div>
  );
};

export default AllAnswers;
