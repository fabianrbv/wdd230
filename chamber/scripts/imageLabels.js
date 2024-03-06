function updateImageContainers() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 640) {
        showContainer('smallContainer');
        hideContainers(['mediumContainer', 'largeContainer']);
    } else if (screenWidth > 640 && screenWidth <= 1200) {
        showContainer('mediumContainer');
        hideContainers(['smallContainer', 'largeContainer']);
    } else {
        showContainer('largeContainer');
        hideContainers(['smallContainer', 'mediumContainer']);
    }
}

function showContainer(containerId) {
    const container = document.getElementById(containerId);
    container.classList.add('active');
}

function hideContainers(containerIds) {
    containerIds.forEach((id) => {
        const container = document.getElementById(id);
        container.classList.remove('active');
    });
}

updateImageContainers();

window.addEventListener('resize', updateImageContainers);
