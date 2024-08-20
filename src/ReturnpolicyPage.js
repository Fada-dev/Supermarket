import React from 'react';

const ReturnPolicy = () => {
    return (
        <div className="return-policy-container">
            <h1 className="return-policy-heading">Our Return Policy</h1>
            <p className="effective-date"><strong>Effective Date: 26th August, 2024</strong></p>
            <p className="return-policy-paragraph">
                At K1 Supermarket, we want you to be completely satisfied with your purchase. If you are not satisfied for any reason, we offer a straightforward return policy to ensure a hassle-free experience.
            </p>

            <h2 className="return-policy-section-title">1. Return Period</h2>
            <p className="return-policy-paragraph">
                You have <strong>30 days</strong> from the date of purchase to return items for a full refund or exchange.
            </p>

            <h2 className="return-policy-section-title">2. Eligibility for Returns</h2>
            <p className="return-policy-paragraph">To be eligible for a return, items must be:</p>
            <ul className="return-policy-list">
                <li>Unopened and in their original packaging.</li>
                <li>Accompanied by a receipt or proof of purchase.</li>
            </ul>

            <h2 className="return-policy-section-title">3. Non-returnable Items</h2>
            <p className="return-policy-paragraph">Certain items are non-returnable, including:</p>
            <ul className="return-policy-list">
                <li>Perishable goods (e.g., fresh food items).</li>
                <li>Gift cards.</li>
                <li>Downloadable software products.</li>
            </ul>

            <h2 className="return-policy-section-title">4. Return Process</h2>
            <p className="return-policy-paragraph">To initiate a return, please follow these steps:</p>
            <ol className="return-policy-list">
                <li>Contact our customer service team at <a href="mailto:[customer service email]" className="return-policy-link">[customer service email]</a> or call us at [customer service phone number].</li>
                <li>Provide your order number and the reason for the return.</li>
                <li>Pack the item securely in its original packaging and include the receipt.</li>
                <li>Ship the item to the address provided by our customer service team.</li>
            </ol>

            <h2 className="return-policy-section-title">5. Refunds</h2>
            <p className="return-policy-paragraph">
                Refunds will be processed within <strong>7-10 business days</strong> after we receive your returned item. The refund will be issued to the original payment method used at the time of purchase.
            </p>

            <h2 className="return-policy-section-title">6. Shipping Costs</h2>
            <p className="return-policy-paragraph">
                Customers are responsible for return shipping costs unless the return is due to an error on our part (e.g., wrong item sent). If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>

            <h2 className="return-policy-section-title">7. Exchanges</h2>
            <p className="return-policy-paragraph">
                If you wish to exchange an item for a different size or color, please follow the return process and place a new order for the desired item.
            </p>

            <h2 className="return-policy-section-title">8. Customer Support</h2>
            <p className="return-policy-paragraph">
                For any questions or concerns regarding our return policy, please reach out to our customer support team. We are here to help!
            </p>
        </div>
    );
};

export default ReturnPolicy;