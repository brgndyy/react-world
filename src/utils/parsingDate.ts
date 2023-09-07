// 날짜 파싱 함수

export const parsingDate = (createdAt: string) => {
  const extractedDate = createdAt.split("T")[0];

  // Date 오브젝트로 변환
  const date = new Date(extractedDate);

  // 월, 일, 년 형식으로 포맷
  const formattedDate = `${date.toLocaleString("en-US", {
    month: "long",
  })} ${date.getDate()} ${date.getFullYear()}`;

  return formattedDate;
};
