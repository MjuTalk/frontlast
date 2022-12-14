import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { useTodoDispatch, useTodoNextId } from "./BoardContext"
import { Button } from "@mui/material"
import { toast } from "react-toastify"
import ImageUploader from "./ImageUploader"
import TextArea from "./TextArea"
import axios from "axios"

const InsertFormPositioner = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  background-color: #ffbec3;
  border-radius: 30px;
`

const AddBoardWrapper = styled.div`
  position: relative;
  top: 0px;
  z-index: 1;
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 0.5s;
  font-family: "Noto Sans KR", sans-serif;
  .addBoard-header {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin: 50px 0;
  }
  .submitButton {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
    }
    .disable-button {
      font-size: 1.1rem;
      cursor: not-allowed;
    }
    .success-button {
      font-size: 1.1rem;
    }
  }
  .addBoard-body {
    display: flex;
    margin: 20px 0;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const Btn = styled.button`
  border-radius: 30px;
  position: absolute;
  top: -146px;
  right: 130px;
  color: #333;
  background-color: #fff;
  p {
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration-line: none;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: "Noto Sans KR", sans-serif;
    flex-shrink: 0;
    margin: 0 1rem;
  }
  :hover {
    color: #333;
    background-color: pink;
    cursor: pointer;
  }
`

function BoardCreate() {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "",
  })
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const dispatch = useTodoDispatch()
  const nextId = useTodoNextId()

  const onToggle = () => setOpen(!open)
  const onSubmit = (e) => {
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        done: false,
        img_url: image.preview_URL,
        title: title,
        content: content,
        username: "?????????",
        date: TodayTime(),
      },
    })
    setOpen(false)
    nextId.current += 1
  }

  // ?????? ?????? ?????? ???????????? ??????
  const TodayTime = () => {
    let now = new Date() // ?????? ?????? ??? ??????
    let todayMonth = now.getMonth() + 1 // ???
    let todayDate = now.getDate() // ???
    const week = ["???", "???", "???", "???", "???", "???", "???"]
    let dayOfWeek = week[now.getDay()] // ??????
    let hours = now.getHours() // ??????
    let minutes = now.getMinutes() // ???

    return (
      todayMonth +
      "???" +
      todayDate +
      "??? " +
      dayOfWeek +
      "?????? " +
      hours +
      "???" +
      minutes +
      "???"
    )
  }

  const canSubmit = useCallback(() => {
    return image.image_file !== "" && content !== "" && title !== ""
  }, [image, title, content])

  const JsonData = {
    title: `${title}`,
    content: `${content}`,
    file: `${image.preview_URL}`,
  }

  const handleSubmit = useCallback(async () => {
    try {
      console.log(JSON.stringify(JsonData))
      axios({
        url: "/api/posts",
        method: "post",
        data: JsonData,
      })
        .then(function a(response) {
          console.log("???????????? ????????????:", response)
        })
        .catch(function(error) {
          console.log("????????????:", error)
        })

      window.alert("????????????? ?????????????????????????")()
    } catch (e) {
      // ???????????? ?????? ?????? ????????? ??????
      toast.error(
        "????????????! ???????????? ???????????? ????????? ????????? ??? ????????????" + "????",
        {
          position: "top-center",
        }
      )
    }
  }, [canSubmit])

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <AddBoardWrapper>
            <div className="addBoard-header">????????? ???????????? ???????</div>

            <div className="submitButton">
              {canSubmit() ? (
                <Button
                  onClick={() => {
                    handleSubmit()
                    onSubmit()
                  }}
                  className="success-button"
                  variant="outlined"
               >
                  ????????????????
                </Button>
              ) : (
                <Button>
                  className="disable-button"
                  variant="outlined"
                  size="large"

                  ????????? ????????? ?????? ???????????????????
                </Button>
              )}
            </div>

            <div className="addBoard-body">
              <ImageUploader
                setImage={setImage}
                preview_URL={image.preview_URL}
              />
              <TextArea
                setTitle={setTitle}
                setContent={setContent}
                title={title}
                content={content}
              />
            </div>
          </AddBoardWrapper>
        </InsertFormPositioner>
      )}
      <Btn onClick={onToggle} open={open}>
        <p>?????????</p>
      </Btn>
    </>
  )
}

export default React.memo(BoardCreate)