import PageBody from '../../components/Utilities/PageBody';
import Navbar from '../../components/Navbars/Navbar';
import { motion } from 'framer-motion'
import { routeVariants } from '../../variants/index';

const PostDetails: React.FC = props => {
    return (
        <motion.section
            variants={routeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Navbar />
            <PageBody>
                
            </PageBody>
        </motion.section>
    );
}

export default PostDetails;