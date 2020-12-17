import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const ServicesText = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div className="services-header reveal-from-bottom">
                <div className="inner">
                    <h4 className="mt-0 mb-8 text-dark">
                    Jobs your neighbors need help with
                    </h4>
                    <p className="m-0 text-sm">
                    Below is a list of some of the jobs your neighbors need help with. Take a look. Is there anything you can assist with?
                    </p>
                </div>
            </div>


            
          </div>
        </div>
      </div>
    </section>
  );
}

ServicesText.propTypes = propTypes;
ServicesText.defaultProps = defaultProps;

export default ServicesText;