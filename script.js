document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('projectForm');
    
    // 从localStorage加载已保存的数据
    const savedData = localStorage.getItem('projectData');
    if (savedData) {
        const data = JSON.parse(savedData);
        populateForm(data);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 收集表单数据
        const formData = new FormData(form);
        const data = {};
        
        // 处理复选框数据
        data.redLight = [];
        data.greenLight = [];
        formData.getAll('redLight').forEach(value => data.redLight.push(value));
        formData.getAll('greenLight').forEach(value => data.greenLight.push(value));
        
        // 处理其他表单字段
        for (let [key, value] of formData.entries()) {
            if (key !== 'redLight' && key !== 'greenLight') {
                data[key] = value;
            }
        }
        
        // 添加时间戳
        data.timestamp = new Date().toISOString();
        
        // 保存到localStorage
        localStorage.setItem('projectData', JSON.stringify(data));
        
        // 显示成功消息
        alert('项目评估数据已保存！');
        
        // 重置表单
        form.reset();
    });
});

function populateForm(data) {
    // 填充复选框
    if (data.redLight) {
        data.redLight.forEach(value => {
            const checkbox = document.querySelector(`input[name="redLight"][value="${value}"]`);
            if (checkbox) checkbox.checked = true;
        });
    }
    
    if (data.greenLight) {
        data.greenLight.forEach(value => {
            const checkbox = document.querySelector(`input[name="greenLight"][value="${value}"]`);
            if (checkbox) checkbox.checked = true;
        });
    }
    
    // 填充其他字段
    for (let key in data) {
        if (key !== 'redLight' && key !== 'greenLight' && key !== 'timestamp') {
            const element = document.querySelector(`[name="${key}"]`);
            if (element) {
                if (element.tagName === 'SELECT') {
                    element.value = data[key];
                } else if (element.tagName === 'TEXTAREA') {
                    element.value = data[key];
                }
            }
        }
    }
} 