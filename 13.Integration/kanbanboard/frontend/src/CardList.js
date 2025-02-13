import React from "react";
import Card from "./Card";

function CardList({ title }) {
    return (
        <div className="Card_List">
            <h1>{title}</h1>
            {/* 실제로는 Props 또는 Context 등을 통해 데이터 받아오기 */}
            <Card cardTitle="예시 카드 제목" cardDetail="카드 상세 설명" />
            {/* 필요하다면 여러 개의 Card를 배열 map으로 렌더링 */}
        </div>
    );
}

export default CardList;
