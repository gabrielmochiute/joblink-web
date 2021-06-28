import { LoadingBar, Bar } from "./styles";

function Loading() {
  return (
    <>
      <LoadingBar>
        <h1>Carregando...</h1>
        <div id="line-base">
          <div id="line"></div>
        </div>
      </LoadingBar>
    </>
  );
}

export default Loading;
