
import PropTypes from "prop-types";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt={item.title || "Project"} />
      <h3 className="project__title">{item.title}</h3>
      <a href="#" className="project__button">
        Demo <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
    </div>
  );
};

ProjectItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItems;
