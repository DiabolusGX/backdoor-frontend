import axios from 'axios';
import { ISignUp, ILogIn, IUpdateUser, IPostData, IThreadData, ICommentData } from './apiInterface';

const API = axios.create();

// Thread API Routes
export const fetchAllThreads = () => API.get('/thrd');
export const fetchThread = (title: string) => API.get(`/thrd/${title}`);
export const createThread = (threadData: IThreadData) => API.post('/thrd/create', threadData);
export const updateThread = (title: string, threadData: IThreadData) => API.patch('/thrd/update', { title, threadData });


// Posts API Routes
export const fetchAllPosts = () => API.get('/psts');
export const fetchPost = (id: string) => API.get(`/psts/${id}`);
export const fetchPostsBySearch = (title?: string, tags?: string, userId?: string) => API.get(`/psts/search?title=${title}&tags=${tags}&userId=${userId}`);
export const createPost = (postData: IPostData) => API.post('/psts/create', postData);
export const updatePost = (id: string, updatedPost: IPostData) => API.patch('/psts/update', { id, updatedPost });
export const reactPost = (id: string, action: 'like' | 'dislike') => API.patch(`/psts/react?id=${id}&action=${action}`);
export const deletePost = (id: string) => API.delete(`/psts/delete?id=${id}`);


// Comments API Routes
export const fetchComment = (commentId: string) => API.get('/cmts/' + commentId);
export const fetchCommentsBySearch = (postId?: string, userId?: string) => API.get(`/cmts/search?postId=${postId}&userId=${userId}`);
export const createComment = (postId: string, comment: ICommentData) => API.post(`/cmts/create?postId=${postId}`, comment);
export const updateComment = (commentId: string, comment: ICommentData) => API.patch(`/cmts/update`, { id: commentId, comment });
export const reactComment = (commentId: string, action: 'like' | 'dislike') => API.patch(`/cmts/react?commentId=${commentId}&action=${action}`);
export const deleteComment = (commentId: string, postId: string) => API.delete(`/cmts/delete?postId=${postId}&commentId=${commentId}`);


// User API Routes
export const logout = () => API.post('/usr/logout');
export const login = (loginData: ILogIn) => API.post('/usr/login', loginData);
export const signUp = (signupData: ISignUp) => API.post('/usr/signup', signupData);
export const getUser = (username: string) => API.get(`/usr/${username}`);
export const getUsername = (userId: string) => API.get(`/usr/username?userId=${userId}`);
export const updateUser = (updateData: IUpdateUser) => API.patch('/usr/update', updateData);
export const checkAuthenticated = () => API.post('/usr/check');