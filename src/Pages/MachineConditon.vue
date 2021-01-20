<template>
    <div class="header_text"><div class="text">  Machine condition</div></div>
    <div class="machine_condition">
        <button class="nice">Nice</button>
        <button class="error">Error</button>
        <button class="running">Running</button>
        <button class="maintance">Maintance</button>
    </div>
</template>

<style scoped>
*{
    font-size: 30px;
}
.header_text{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.text{
background-color: #a3e0a2;
padding:10px 30px 10px 30px;
border-radius: 20px 20px 0px 0px;
color:white;

}
.machine_condition{
    width: 100%;
    display:flex;
    justify-content: center;
}
.nice{
    width: 20%;
    background: #2DE53F;
}
.running{
    width: 20%;
     background: #35C7F5;
}
.error{
    background: #E81522;
    width: 20%;
}
.maintance{
    background: #FEB979;
    width: 20%;

}
.button:hover{
    cursor: pointer;
}
</style>