import { NextRequest, NextResponse } from 'next/server';
import Arweave from 'arweave';

// Initialize Arweave instance (matching getdata.js)
const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
});

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const transactionId = searchParams.get('transactionId');

    if (!transactionId) {
        return NextResponse.json(
            { success: false, error: 'Transaction ID is required' },
            { status: 400 }
        );
    }

    // Validate transaction ID format
    if (transactionId.length !== 43) {
        return NextResponse.json(
            { success: false, error: 'Invalid transaction ID format' },
            { status: 400 }
        );
    }

    try {
        console.log(`Attempting to fetch data for transaction: ${transactionId}`);

        // First, let's check if the transaction exists (like getdata.js)
        // const txStatus = await arweave.transactions.getStatus(transactionId);
        // console.log('Transaction status:', txStatus);

        // Get transaction data (like getdata.js)
        const data = await arweave.transactions.getData(transactionId, {
            decode: true,
            string: true
        });

        console.log('Data retrieved successfully');

        return NextResponse.json({
            success: true,
            content: data as string,
            transactionId: transactionId,
            arweaveUrl: `https://arweave.net/${transactionId}`
        });

    } catch (error) {
        console.error('Error fetching data:', error instanceof Error ? error.message : 'Unknown error');

        // Try alternative approach with different options (like getdata.js)
        try {
            console.log('Trying alternative method...');
            const data = await arweave.transactions.getData(transactionId, {
                decode: true,
                string: true
            });
            console.log('Data retrieved with alternative method');

            return NextResponse.json({
                success: true,
                content: data as string,
                transactionId: transactionId,
                arweaveUrl: `https://arweave.net/${transactionId}`
            });

        } catch (altError) {
            console.error('Alternative method also failed:', altError instanceof Error ? altError.message : 'Unknown error');
            console.log('The transaction may not exist or may not be accessible.');

            return NextResponse.json(
                {
                    success: false,
                    error: 'The transaction may not exist or may not be accessible. Both methods failed.'
                },
                { status: 404 }
            );
        }
    }
}
