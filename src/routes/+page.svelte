<script lang='ts'>
	//Импорт компонентов
	import {
		Button, 
		Switch,
		TextField,
		DataGrid,
		AutoComplete,
		ColorThemeSwitch
	} from 'svelte-elegant';

	//Импорт утилит
	import { valueExtractors } from 'svelte-elegant/utils'

	//Тестовые данные
	let value = '';
	let isChecked = false;
</script>

<div id = 'container'>
	<div id = 'page'>
		<h1>Svelte Elegant Tester</h1>
		<p>Text Field</p>
		<div class="components-container">
			<TextField 
				bind:value = {value /*Передача переменной по ссылке*/}
				variant = 'Outlined'
				label = 'Outlined'
				onfocus={() => {}}
				onblur={() => {}}
				oninput={(e: Event) => {
					let value = valueExtractors.getInputValue(e); //Извлечение значения
				}}
			/>
			<TextField 
				variant = 'Filled'
				label = 'Filled'
			/>
			<TextField 
				variant = 'Standard'
				label = 'Standard'
			/>
		</div>
		<p class='heading'>Data Grid</p>
		<div class="components-container">
			<DataGrid />
		</div>
		<p class = 'heading'>Auto Complete</p>
		<div class="components-container">
			<AutoComplete 
				options = {['Apple', 'Orange', 'Banana', 'Grape', 'Mango']}
			/>
			<AutoComplete 
				variant = 'Filled' 
			/>
			<AutoComplete 
				variant = 'Standard' 
			/>
		</div>
		<p class = 'heading'>Button</p>
		<div class="components-container">
			<Button variant = 'Contained'>
				CONTAINED
			</Button>
			<Button variant = 'Outlined'>
				OUTLINED
			</Button>
		</div>
		<p class='heading'>Switch</p>
		<div>
			<Switch
				bind:isChecked = {isChecked /*Передача переменной по ссылке*/}
				onchange={(e: Event) => {
					const checked = valueExtractors.getChecked(e); //Извлечение значения
				}}
			 />
		</div>
		<p class='heading'>Color Theme Switch</p>
		<div>
			<ColorThemeSwitch />
		</div>
		<p class='heading'>План работы:</p>
		<ol>
			<li> Подключение семейства, размера, цвета шрифта к каждому компоненту через CSS-переменные без использования ColorModeProvider; </li>
			<li> Передача конкретных свойств в ColorThemeStore; </li>
			<li> Стили для TextField и Button в состоянии disabled;</li>
			<li> Header и Drawer; </li>
			<li> Отображение, извлечение и редактирование данных DataGrid, а также - его кастомизация; </li>
			<li> TextArea; </li>
			<li> Удаление заливки label'а TextField; </li>
			<li> Отображение drop list'а AutoComplete сверху или снизу поля в зависимости от доступной области экрана и при скролинге; </li>
			<li> Стили для активации TextField с помощью состояний, а не селектора input:not(:placeholder-shown);</li>
		</ol>
	</div>
</div>

<style>
	.heading {
		margin-top: 0.35rem;
	}

	.components-container {
		display: flex; /* Располагает дочерние элементы в строку */
		gap: 1rem; /* Задает отступ между элементами */
		align-items: center; /* Вертикальное выравнивание по центру */
	}

	#container {
		display: flex;
		justify-content: center; /* Горизонтальное центрирование */
		align-items: center; /* Вертикальное центрирование */
		min-height: 100vh; /* Минимальная высота экрана */
	}
</style>