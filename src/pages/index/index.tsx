import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'
import { DatePicker, Cell } from '@nutui/nutui-react-taro'
import { useState } from 'react'
export default function Index() {
	const [show1, setShow1] = useState(false)
	const [desc1, setDesc1] = useState('2012年 01月 01日')
	const confirm1 = (values: (string | number)[], options: any[]) => {
		setDesc1(options.map((option) => option.text).join(' '))
	}
	useLoad(() => {
		console.log('Page loaded.')
	})

	return (
		<View className="index">
			<View>
				<Cell
					title="显示中文"
					description={desc1}
					onClick={() => setShow1(true)}
				/>

				<DatePicker
					title="日期选择"
					visible={show1}
					showChinese
					onClose={() => setShow1(false)}
					onConfirm={(options, values) => confirm1(values, options)}
				/>
			</View>
			<View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
				<View>滚动</View>
			</View>
		</View>
	)
}
