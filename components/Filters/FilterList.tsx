import RangeSlider from './RangeSlider';
import FilterContentType from './FilterContentType';

const FilterList: React.FC = () => {
  return (
    <div className=" p-6 flex justify-between items-center space-x-10">
      <div className="items-center">
        <div className="text-sm font-medium">YEAR</div>
        <RangeSlider min={1970} max={2015} step={1} />
      </div>

      <div className="items-center">
        <div className="text-sm font-medium">TYPE</div>
        <FilterContentType />
      </div>
    </div>
  );
};

export default FilterList;
