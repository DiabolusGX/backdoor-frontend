import { ChatAlt2Icon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { threadCardVariants } from '../../variants/index'
import classes from './ThreadCard.module.scss';

interface Props {
    title: string;
    body: string;
    numberOfPosts: Number;
}

const ThreadCard: React.FC<Props> = props => {
    let threadBody;
    if (props.body.length > 70)
        threadBody = props.body.substring(0, 70) + "...";
    else
        threadBody = props.body;

    return (
        <motion.div className={`flex flex-col justify-around w-11/12 md:w-5/12 xl:w-2/5 2xl:w-4/12 cursor-pointer
                            ${classes.ThreadCard} p-8 md:p-12 xl:px-12 xl:py-8 rounded-2xl bg-grey-lighter m-2 box-border`}
            key={props.title}
            variants={threadCardVariants}
            whileHover="hover"
        >
            <h2 className="text-display text-3xl text-syntax-yellow my-2">
                {props.title}
            </h2>

            <hr className="mb-4 border-red-lighter" />

            <p className="text-body text-xl text-white my-1">
                {threadBody}
            </p>
            <div className="max-h-min flex justify-start items-center mt-4">
                <ChatAlt2Icon className="w-8 text-red-lighter" />
                <p className="mx-4 text-grey-light">{props.numberOfPosts} posts</p>
            </div>
        </motion.div>
    );
}

export default ThreadCard;