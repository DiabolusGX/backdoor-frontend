import PageBody from '../../components/Utilities/PageBody';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Utilities/Sidebar';
import Navbar from '../../components/Navbars/Navbar';
import Heading from '../../components/Utilities/Heading';
import InputField from '../../components/Utilities/InputField';
import TagsSelector from '../../components/Utilities/TagsSelector';
import SuccessButton from '../../components/Buttons/SuccessButton';
import TextArea from '../../components/Utilities/TextArea';
import { routeVariants } from '../../variants/index';
import PublishPostIllustration from '../../assets/publish-post-illustration.svg';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { useRef, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

interface RouteParams {
    postId: string;
}

const NewPost: React.FC = props => {
    const params = useParams<RouteParams>();
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <motion.section
            variants={routeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Navbar />
            <PageBody>
                <Sidebar
                    bgColor="grey-lighter"
                    title="New Post"
                    description="Tip: Give your post a short but catchy title and a proper description explaining everything in detail."
                    titleColor="yellow"
                    descriptionColor="grey-light"
                    illustration={PublishPostIllustration}
                />
                <div className="flex flex-1 justify-center items-center flex-wrap mt-8 mb-20 mx-2 box-border">
                    <div className="bg-grey-lightest flex flex-col items-center w-11/12 md:w-9/12 xl:w-8/12 2xl:w-7/12
                    m-4 py-6 sm:py-6 xl:py-10 xl:px-8 rounded-3xl">
                        <Heading>New Post</Heading>
                        <form onSubmit={submitHandler} className="w-full mt-4 mb-2 mx-4 flex px-8 md:px-10
                        lg:px-16 xl:px-20 flex-col items-center">
                            <InputField
                                placeholder="Enter your post title here. (Keep it short!)"
                                label="Post Title"
                                type="text"
                                required
                            />
                            <TextArea
                                label="Post Description"
                                placeholder="Enter your post description here"
                                limit={2000}
                                required
                            />
                            <TagsSelector label="Tags">
                                <ChevronDownIcon className="w-2/3 text-syntax-yellow"/>
                            </TagsSelector>
                            <div className="mt-4">
                                <SuccessButton type="submit">Post</SuccessButton>
                            </div>
                        </form>
                    </div>
                </div>
            </PageBody>
        </motion.section>
    );
}

export default NewPost;