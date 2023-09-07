// 미들웨어에서 실행될 토큰 검증 함수

export const getUserInfoByToken = async (tokenValue: string) => {
  try {
    const res = await fetch("https://api.realworld.io/api/user", {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });

    if (!res.ok) {
      throw new Error("유저 정보를 가져오지 못했어요!");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
