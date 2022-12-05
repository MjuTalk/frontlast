import {
    EachPostLi,
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostLink,
    PostListDiv,
    PostRepl,
    PostSection,
    PostTitle,
    PostTitleDiv,
} from './styledComponent';

import {
    faSun,
    faMoon,
    faArrowsRotate,
    faPenToSquare,
    faLocationPin,
    faArrowLeft,
    faArrowRight,
    faSlidersH,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EachPost from './EachPostLi';
import Voc from './Voc';


function ShowPostList({ isPost, loading, addPost, postList }) {
    return (
        <>
            <PostSection>

                <PostTitleDiv>

                    <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
                    <Voc>

                        <PostTitle>익명게시판</PostTitle>

                    </Voc>
                </PostTitleDiv>

                <PostListDiv>
                    {loading ? (
                        <LoadingDiv>
                            <LoadingImg src={'./loading.svg'} />
                        </LoadingDiv>
                    ) : isPost ? (
                        <LoadingDiv>
                            아직 기록된 글이 없습니다.
                        </LoadingDiv>
                    ) : (
                        <ul>
                            {postList.map((element) => (
                                <EachPost
                                    key={element.id}
                                    title={element.title}
                                    replCount={element.replCount}
                                />
                            ))}
                        </ul>
                    )}
                </PostListDiv>
            </PostSection>
            <PagingSection>
                <PagenumberDiv>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </PagenumberDiv>
                <PagenumberDiv>1</PagenumberDiv>
                <PagenumberDiv>
                    <FontAwesomeIcon icon={faArrowRight} />
                </PagenumberDiv>
            </PagingSection>
        </>
    )
}

export default ShowPostList