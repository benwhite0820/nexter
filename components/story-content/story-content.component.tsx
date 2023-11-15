import Button from '../button/button.component';
import Heading from '../heading/heading.component';
import '@/scss/_utils.scss';
import './story-content.style.scss';

const StoryContent = () => {
  return (
    <div className="story__content">
      <Heading headingLevel="h3" className="mb-sm">
        Happy Customers
      </Heading>
      <Heading headingLevel="h2" color="dark" className="mb-md">
        &ldquo;The best decision of our lives&rdquo;
      </Heading>
      <p className="story__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
        harum volupta!
      </p>
      <Button>find your home</Button>
    </div>
  );
};

export default StoryContent;
