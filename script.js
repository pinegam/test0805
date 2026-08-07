// 모달 열고 닫기 ___________________________
const modal = document.querySelector('#modal');
document.querySelector('#contactBtn').addEventListener('click', () => {
    modal.classList.add('is-open');
});
/* 어두운 배경(오버레이) 클릭 시 닫기 · 모달 박스 안 클릭은 제외 */
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('is-open');
    }
});

// ___________________________ ___________________________



