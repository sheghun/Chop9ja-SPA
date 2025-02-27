import React from 'react'
import { Table as GroTable, Box, Text, TableBody, TableRow, TableCell } from "grommet";
import styled from 'styled-components';

const Wrapper = styled(Box)`
	max-width: 720px;
	margin: 3rem auto 0;
`;

const Table = ({ transactions }: { transactions: { id: number, date: string, type: string, amount: number }[] }) => {

	const setWidth = () => {
		if (window.innerWidth > 720) {
			return 680
		}
		return window.innerWidth - 100
	}

	return (
		<Wrapper
			background="white"
			pad="medium"
			elevation="medium"
		>
			<Text><strong>Wallet Transactions</strong></Text>
			<GroTable
				style={{
					width: setWidth()
				}}
			>
				<TableBody>
					{transactions.map(transaction => (
						<TableRow key={transaction.id} style={{ padding: ".5rem" }}>
							<TableCell style={{ borderBottom: "solid 1px rgba(0, 0, 0, 0.3)" }}>
								{transaction.date}
							</TableCell>
							<TableCell style={{ borderBottom: "solid 1px rgba(0, 0, 0, 0.3)" }}>
								{transaction.type}
							</TableCell>
							<TableCell
								style={{
									color: transaction.type === "Withdrawal" ? "#D9251B" : "#009746",
									borderBottom: "solid 1px rgba(0, 0, 0, 0.3)"
								}}
							>
								{transaction.type === "Withdrawal" ? "-" + transaction.amount : transaction.amount}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</GroTable>
		</Wrapper>
	)
}

export default Table
