import styled from 'styled-components';



export const StyledH1 = styled.h1`
  margin: 0;
  font-size: 16px;
`;

export const ColoredText = styled.p`
    font-family: @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: normal; 
    flex-direction: row; 
    margin: 0;
`;

export const ToSpan = styled.span`
    color: var(--Blue, #4EA8DE); 
`;

export const DoSpan = styled.span`
    color: var(--PurpleDark, #5E60CE); 
`;

export const Todo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    margin: 0;
    width: 100%;
    height: 1024px;
    background: var(--Gray-600, #1A1A1A);
`;

export const Logo = styled.div`
    width: 8.75%;
    height: 48px;
    display: flex;
    flex-direction: row; 
    flex-shrink: 0;
    gap: 12px;
`;

export const Background = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    justify-content: center;
    background: var(--Gray-700, #0D0D0D);
`;

export const ModalButton = styled.button`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 0px;
  border-radius: 8px;
  background: var(--Blue-Dark, #1E6F9F);
  color: var(--Gray-100, #F2F2F2);
  font-family: @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
`;

export const ModalP = styled.p`
  color: var(--Gray-300, #808080);
    font-family: @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
`;

export const Input = styled.input`
    width: 70%;
    max-height: 10px;
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 8px;
    border: 1px solid var(--Gray-700, #0D0D0D);
    background: var(--Gray-500, #262626);
    color: var(--Gray-300, #808080);
    font-family: @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ListP = styled.p`
  color: var(--Gray-100, #F2F2F2);
  font-family: @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  font-size: 14px;
  font-style: normal;
  min-width: 89%;
  max-width: 89%;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  word-wrap: break-word;
`;

export const ModalContent = styled.div`
  background: #fff;
  width: 30%;
  height: auto;
  padding: 20px;
  gap: 8px;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const ListElem = styled.div`
  display: flex;
  padding: 16px;
  align-items: cener;
  flex-direction: row;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--Gray-400, #333);
  background: var(--Gray-500, #262626);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
`;


export const DeleteButton = styled.button`
  align-self: center;
  background: url("/trash.svg") no-repeat;
  background-size: cover;
  border: none;
  width: 30px; 
  height: 30px; 
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const EditButton = styled.button`
  align-self: center;
  background: url("/edit.svg") no-repeat;
  background-size: cover;
  border: none;
  width: 30px; 
  height: 30px; 
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const TotalP = styled.p`
  color: var(--Blue, #4EA8DE);
  font-family: @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  marginRight: "auto"
`;

export const FinishedP = styled.p`
color: var(--Purple, #8284FA); 
  font-family: @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  marginRight: "auto"
`;

export const CountHolder = styled.div`
  display: flex;
  padding: 2px 8px;
  height: auto;
  width: auto;
  max-height: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  background: var(--Gray-400, #333);
  color: var(--Gray-200, #D9D9D9);
  font-family: @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
