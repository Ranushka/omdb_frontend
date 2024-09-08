import RangeSlider from './RangeSlider';
import FilterContentType from './FilterContentType';

const FilterList: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between p-6 pt-0 md:pt-6 items-normal md:items-center space-x-0 md:space-x-10">
      <div className="">
        <div className="text-sm font-medium">YEAR</div>
        <RangeSlider min={1970} max={2015} step={1} />
      </div>

      <div className="">
        <div className="text-sm font-medium">TYPE</div>
        <FilterContentType />
      </div>
    </div>
  );
};

export default FilterList;
