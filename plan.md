# Implementation Plan - Vita Finance (BNPL) Page

Create a new page detailing the Buy Now, Pay Later (BNPL) facility in partnership with Abay Bank.

## 1. Create New Page Component
- File: `src/pages/VitaFinanceBNPL.tsx`
- Content: Detailed information about BNPL for end users and merchants.
- Styling: Consistent with `PartnerFunding.tsx` using brand colors (#002147 and #CE1126).
- Use generated images for visual appeal.

## 2. Update Routing
- File: `src/App.tsx`
- Task: 
    - Import `VitaFinanceBNPL`.
    - Add `<Route path="/vita-finance-bnpl" element={<><Navbar /><VitaFinanceBNPL /><Footer /></>} />`.
    - Update the Footer link for "Vita Finance (BNPL)" to point to `/vita-finance-bnpl`.

## 3. Review & Verify
- Ensure the page is responsive.
- Check that all content from the user request is included accurately.
- Verify navigation works from the footer.
