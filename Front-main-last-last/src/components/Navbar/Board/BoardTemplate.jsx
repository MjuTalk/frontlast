import React from "react"
import styled from "styled-components"

const TodoTemplateBlock = styled.div`
  
`

function BoardTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default BoardTemplate