import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { getRandomHexColor } from 'helpers/colorGenerator';



const Statistics = ({stats, title}) => {
   
    return (<section className={s.statistics}>
  
        {title && (<h2 className={s.title}>{title}</h2>)}

        <ul className={s.statList}>
    
            {
                stats.map((stat) => {
                    return <li className={s.item} key={stat.id} style={{backgroundColor: `${getRandomHexColor()}`}}>
                        <span className={s.label}>{stat.label}</span>
                        <span className={s.percentage}>{stat.percentage}%</span>
                    </li>
                })
            }

  </ul>
</section>)
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }
    )),
};

export default Statistics;